<?php

namespace App\Http\Controllers;

use Stripe\Stripe;
use App\Mail\Adhesion;
use App\Models\WebPage;
use App\Models\Activity;
use App\Models\Customers;
use App\Models\WebBanner;
use Stripe\PaymentIntent;
use App\Models\CustomerAz;
use App\Models\NewsLetter;
use App\Models\Partenaire;
use App\Models\WebHomePage;
use App\Models\WebSiteInfo;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Stripe\Checkout\Session;
use App\Models\WebAboutUsTeam;
use Illuminate\Support\Facades\DB;
use App\Mail\NewsletterSubscription;
use Illuminate\Support\Facades\Mail;
use Stripe\Checkout\Session as StripeSession;

class HomeController extends Controller
{
    //
    public function index(){

        $info = WebSiteInfo::first();
        if($info){
            $info->presentation_photo=base64_encode($info->presentation_photo);
            $info->presentation_photo2=base64_encode($info->presentation_photo2);
            $info->short_logo=base64_encode($info->short_logo);
            $info->logo=base64_encode($info->logo);
            $info->file=base64_encode($info->file);
            $info->fr_file=base64_encode($info->fr_file);

            return response()->json([
                'message'=>'Informations du site récupérées avec succès',
                'info' => $info,
            ],
            200);
        }
    }

    public function homeequipement(){
        $HomeEquipement = WebHomePage::all();
        if($HomeEquipement){
            foreach($HomeEquipement as $equip){
                $equip->image=base64_encode($equip->image);
            }

            return response()->json([
                'message'=>'Informations du site récupérées avec succès',
                'info' => $HomeEquipement,
            ],
            200);
        }

    }

    public function HomeBaner(){

        $page=WebPage::where('name','Home')->first();

        $banner = WebBanner::where('page_id',$page->id)->get();

        if($banner){
            // $banner->banner->picture=base64_encode($banner->banner->picture);
            foreach($banner as $ban){
                $ban->picture=base64_encode($ban->picture);
            }

            return response()->json([
                'message'=>'Informations du site récupérées avec succès',
                'info' => $banner,
            ],
            200);
        }else {
            return response()->json([
                'message'=>'Aucune information de site trouvée',
            ], 404);
        }



    }
    public function articles(){
        $article = Activity::with('category')->whereHas('category', function ($query) {
            $query->where('Names', 'Activity');
        })
        ->take(3)
        ->get();


        if($article){

            foreach($article as $art){
                $art->Pictures=base64_encode($art->Pictures);
                $art->item_doc=base64_encode($art->item_doc);
                if ($art->category && isset($art->category->Pictures)) {
                    $art->category->Pictures=base64_encode($art->category->Pictures);
                }
            }
            $categoryDescription = $article[0]->category;

            return response()->json([
                'message'=>'Informations du site récupérées avec succès',
                'info' => $article,
                'categoryDescription' => $categoryDescription

            ],
            200);
        }

    }

    public function members(){

        $members=WebAboutUsTeam::take(4)->get();

        if($members){
            foreach($members as $member){
                $member->photo=base64_encode($member->photo);
            }

            return response()->json([
                'message'=>'Informations du site récupérées avec succès',
                'info' => $members,
            ],
            200);
        }
    }



    public function subscribe(Request $request)
    {
        $datas = WebSiteInfo::first();
        // $request->validate([
        //     'email' => 'required|email|unique:web_news_letter,email',
        // ],[
        //     'email.unique' => 'Cet email est déjà inscrit à la newsletter.',
        //     'email.email' => 'Veuillez entrer un email valide.',
        // ]);
        $request->validate([
            'email' => [
                'required',
                'email',
                'unique:web_news_letter,email',
            ],
        ],[
            'email.unique' => 'email_unique',
            'email.email' => 'email_invalid',
        ]);
        $newsletter = new NewsLetter;
        $newsletter->email = $request->email;
        $newsletter->save();

        //Ici, vous pouvez ajouter le code pour ajouter l'email à votre base de données ou à votre service de newsletter
        Mail::to($request->email)->send(new NewsletterSubscription($datas));
        return response()->json(['message' => 'Abonnement réussi']);
    }

    public function partenaire(){
        $parenaire=Partenaire::all();

        if($parenaire){
            foreach($parenaire as $part){
                $part->logo=base64_encode($part->logo);
            }

            return response()->json([
                'message'=>'Informations du site récupérées avec succès',
                'info' => $parenaire,
            ],
            200);
        }

    }

    public function adhesion(Request $request){
        $info = WebSiteInfo::first();


        $data = $request->all();
        $data['genre'] = $request->genre;
        $data['raison'] = $request->raison;
        $data['profession'] = $request->profession;
        $data['residence'] = $request->residence;
        $data['telephone'] = $request->telephone;
        $data['email'] = $request->email;
        $data['nom'] = $request->nom;
        $datas=[
            'genre' => $data['genre'],
            'raison' => $data['raison'],
            'profession' => $data['profession'],
            'residence' => $data['residence'],
            'telephone' => $data['telephone'],
            'email' => $data['email'],
            'nom' => $data['nom'],
        ];
        $az_Custommer = new CustomerAz;

        //on verifier si l'email existe
        $exist = $az_Custommer->where('E-mails',$data['email'])->first();
        if($exist){
            $exist2=DB::table('customers_credential')->where('userN',$data['email'])->first();
            if($exist2){
                
            }else{
                $password = Str::random(8);
                DB::table('customers_credential')->insert([
                    'customer_number' => $exist->Customers_Numbers,
                    'userN' => $data['email'],
                    'passW' => md5($password),
                ]);
            }
            $customer = new Customers;
            //on verifier si le customer existe
            $exist3 = $customer->where('az_id',$exist->Customers_Numbers)->first();
            if($exist3){
            }else{
                $customer->Names = $data['nom'];
                $customer->{'E-mails'}= $data['email'];
                $customer->Phones = $data['telephone'];
                $customer->Adresses = $data['residence'];
                $customer->sexe = $data['genre'];
                $customer->Categories = $data['profession'];
                $customer->Description = $data['raison'];
                $customer->Notes = $data['raison'];
                $customer->az_id = $exist->Customers_Numbers;
                $customer->save();
            }

        }else{
            $az_Custommer->Names = $data['nom'];
            $az_Custommer->{'E-mails'}= $data['email'];
            $az_Custommer->Phones = $data['telephone'];
            $az_Custommer->Adresses = $data['residence'];
            $az_Custommer->sexe = $data['genre'];
            $az_Custommer->Categories = $data['profession'];
            $az_Custommer->Description = $data['raison'];
            $az_Custommer->Notes = $data['raison'];
            //le az_id doit etre aleatoire pour l'instant
            //$az_Custommer->az_id = rand(100000,999999);

            $az_Custommer->save();
            //on lui genere un mot depasse par defaut


            $password = Str::random(8);
            DB::table('customers_credential')->insert([
                'customer_number' => $az_Custommer->Customers_Numbers,
                'userN' => $data['email'],
                'passW' => md5($password),
            ]);

            $customer = new Customers;
            $customer->Names = $data['nom'];
            $customer->{'E-mails'}= $data['email'];
            $customer->Phones = $data['telephone'];
            $customer->Adresses = $data['residence'];
            $customer->sexe = $data['genre'];
            $customer->Categories = $data['profession'];
            $customer->Description = $data['raison'];
            $customer->Notes = $data['raison'];
            //le az_id doit etre aleatoire pour l'instant
            $customer->az_id = $az_Custommer->Customers_Numbers;
            $customer->save();
        }
        $mail=new Adhesion($datas,$info);
        Mail::to($request->email)->send($mail);

        return response()->json(['message' => 'Adhésion réussie']);

    }

    // public function create(Request $request)
    // {
    //     Stripe::setApiKey(env('STRIPE_SECRET'));

    //     $checkout = StripeSession::create([
    //         'payment_method_types' => ['card'],
    //         'line_items' => [
    //             [
    //                 'price_data' => [
    //                     'currency' => 'XOF',
    //                     'product_data' => [
    //                         'name' => 'T-shirt',
    //                     ],
    //                     'unit_amount' => $request->amount ,
    //                 ],
    //                 'quantity' => 1,
    //             ],
    //         ],
    //         'mode' => 'payment',
    //         'success_url' => $request->success_url,
    //         'cancel_url' => $request->cancel_url,
    //     ]);

    //     return response()->json(['sessionId' => $checkout->id]);
    // }

    public function create(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));

        $checkout = StripeSession::create([
            'payment_method_types' => ['card'],
            'line_items' => [
                [
                    'price_data' => [
                        'currency' => 'usd',
                        'product_data' => [
                            'name' => 'T-shirt',
                        ],
                        'unit_amount' => $request->amount ,
                    ],
                    'quantity' => 1,
                ],
            ],
            'mode' => 'payment',
            'success_url' => $request->success_url,
            'cancel_url' => $request->cancel_url,
            'customer_email' => $request->email, // Ajoutez cette ligne
        ]);

        return response()->json(['sessionId' => $checkout->id]);
    }


    public function getPaymentStatus(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));

        $sessionId = $request->get('sessionId');

        $session = Session::retrieve($sessionId);
        $paymentIntent = PaymentIntent::retrieve($session->payment_intent);
        return response()->json([
            'status' => $paymentIntent->status,
            'montant'=> $paymentIntent->amount / 100 // Stripe stocke les montants en centimes
        ]);
    }
}

