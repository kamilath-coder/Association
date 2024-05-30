<?php

namespace App\Http\Controllers;

use App\Mail\Adhesion;
use App\Models\WebPage;
use App\Models\Activity;
use App\Models\Customers;
use App\Models\WebBanner;
use App\Models\NewsLetter;
use App\Models\Partenaire;
use App\Models\WebSiteInfo;
use Illuminate\Http\Request;
use App\Models\WebAboutUsTeam;
use App\Mail\NewsletterSubscription;
use Illuminate\Support\Facades\Mail;

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
            $categoryDescription = $article[0]->category->fr_description;

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
                function ($attribute, $value, $fail) {
                    if (!str_contains($value, '.com')) {
                        $fail('L\'email doit contenir ".com".');
                    }
                },
            ],
        ],[
            'email.unique' => 'Cet email est déjà inscrit à la newsletter.',
            'email.email' => 'Veuillez entrer un email valide.',
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
        $request->validate([
            'nom' => 'required',
            'email' => 'required|email',
            'telephone' => 'required',
            'residence' => 'required',
            'genre' => 'required',
            'profession' => 'required',
            'raison' => 'required',
        ],[
            'nom.required' => 'Le nom est requis.',
            'email.required' => 'L\'email est requis.',
            'email.email' => 'Veuillez entrer un email valide.',
            'telephone.required' => 'Le numéro de téléphone est requis.',
            'residence.required' => 'La résidence est requise.',
            'genre.required' => 'Le genre est requis.',
            'profession.required' => 'La profession est requise.',
            'raison.required' => 'La raison est requise.',
        ]);

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
        $customer->az_id = rand(100000,999999);

        $customer->save();
        $mail=new Adhesion($datas,$info);
        Mail::to($request->email)->send($mail);


        return response()->json(['message' => 'Adhésion réussie']);





    }
}

