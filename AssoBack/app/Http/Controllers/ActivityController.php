<?php

namespace App\Http\Controllers;

use App\Models\Sales;
use App\Models\WebPage;
use App\Models\Activity;
use App\Models\Customers;
use App\Models\Nouvelles;
use App\Models\WebSiteInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ActivityController extends Controller
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
    public function ActivityBaner(){

        $banner=WebPage::with('banner')->where('name','Activity')->first();
        if($banner){
            $banner->banner->picture=base64_encode($banner->banner->picture);


            return response()->json([
                'message'=>'Informations du site récupérées avec succès',
                'info' => $banner,
            ], 200);


        }



    }

    public function articles(){
        $article = Activity::with('category')->whereHas('category', function ($query) {
            $query->where('Names', 'Activity');
        })->get();


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

    public function voirarticle($id){
        $article=Activity::with('images')
        ->find($id);
        if($article){
            $article->Pictures=base64_encode($article->Pictures);
            $article->item_doc=base64_encode($article->item_doc);
            foreach($article->images as $img){
                $img->Image=base64_encode($img->Image);
            }
            return response()->json([
                'message'=>'Informations du site récupérées avec succès',
                'info' => $article,
            ],
            200);
        }
    }

    public function recentarticle(){
        $article=Activity::orderBy('item_date', 'desc')->first();
        //$article=Activity::first();
        if($article){
            $article->Pictures=base64_encode($article->Pictures);
            $article->item_doc=base64_encode($article->item_doc);
            return response()->json([
                'message'=>'Informations du site récupérées avec succès',
                'info' => $article,
            ],
            200);
        }

    }



    public function fedapay(Request $request){
        $datas = WebSiteInfo::first();
        //dd($email->email);
        $data = $request->validate([
            'prixL' => 'required',
            'emailL' => 'required|email|max:255',
            'nomL' =>'required',
            'phoneL'=>'required',
            'prenomL'=>'required',

        ]);




        $details = [
            'prix' => $data['prixL'],
            'email' => $data['emailL'],
        ];


        $customer= new Customers();
        $customer->Names=$data['nomL'];
        $customer->{'E-mails'}=$data['emailL'];
        $customer->Country='Cameroun';
        $customer->Province='Littoral';
        $customer->City='Douala';
        $customer->Adresses='Douala';
        $customer->Postal_Code='00237';
        $customer->Categories='Activity';
        $customer->User='admin';
        $customer->Phones = $data['phoneL'];
        $customer->az_id = rand(100000,999999);
        $customer->save();

        $price=$data['prixL'];
        $sales= new Sales();
        $sales->Items_Numbers=1;
        $sales->Quantities=1;
        $sales->{'Unique Prices'}=$data['prixL'];
        $sales->Amount_Paid=$data['prixL'];
        $sales->delivered="No";
        $sales->Dates=date('Y-m-d');
        $sales->Customers_Numbers=$customer->Customers_Numbers;

        $sales->User='admin';
        $sales->save();
        $provider='feedapay';
        $info = WebSiteInfo::first();
        $providers=DB::table('online_payment_providors')->where('providor_id',$provider)->first();
        //dd($providers);
        $curency=DB::table('currency_rate')->where('id_currency',$info->currency)->first();
       //dd($curency);
       $price=$curency->value_to_usd * $price;
       $delivery_fees=$price* $providers->smart_percentage;
       $provider_fees= $price* $providers->providor_percentage;
       //dd($delivery_fees, $provider_fees);
       $amount_to_refund = $price - ($delivery_fees + $provider_fees);
      //dd($amount_to_refund);
      $data = DB::table('website_info')->first();
       //envoer les information de payement a la table sales_transaction
       $online_payment_transaction=DB::table('online_payment_transaction')->insert([
           'seller_number' =>$data->info_id,
           'management_fees' => $delivery_fees,
           'payment_provider' => $provider,
           'payment_id' => $request->paymentId,
           'provider_fees' => $provider_fees,
           'order_number' => 0,
           'transaction_type' => 'credit',
           'transaction_from' =>'website_sales',
           'buyer_number' =>  $customer->Customers_Numbers,
           'total_transaction_amount' => $price,
           'amount_to_refund' =>   $amount_to_refund,
           //'website_sales_number' => $salesnumber,
       ]);
        return response()->json([
            'message' => 'Don enregistrées avec succès',
            'data' => $data

        ], 200);







    }
    public function stripe(Request $request){
        $datas = WebSiteInfo::first();
        //dd($email->email);
        $data = $request->validate([
            'prixL' => 'required',
            'emailL' => 'required|email|max:255',
            'nomL' =>'required',
            'phoneL'=>'required',
            'prenomL'=>'required',

        ]);




        $details = [
            'prix' => $data['prixL'],
            'email' => $data['emailL'],
        ];


        $customer= new Customers();
        $customer->Names=$data['nomL'];
        $customer->{'E-mails'}=$data['emailL'];
        $customer->Country='Cameroun';
        $customer->Province='Littoral';
        $customer->City='Douala';
        $customer->Adresses='Douala';
        $customer->Postal_Code='00237';
        $customer->Categories='Activity';
        $customer->User='admin';
        $customer->Phones = $data['phoneL'];
        $customer->az_id = rand(100000,999999);
        $customer->save();

        $price=$data['prixL'];
        $sales= new Sales();
        $sales->Items_Numbers=1;
        $sales->Quantities=1;
        $sales->{'Unique Prices'}=$data['prixL'];
        $sales->Amount_Paid=$data['prixL'];
        $sales->delivered="No";
        $sales->Dates=date('Y-m-d');
        $sales->Customers_Numbers=$customer->Customers_Numbers;

        $sales->User='admin';
        $sales->save();
        $provider='stripe';
        $info = WebSiteInfo::first();
        $providers=DB::table('online_payment_providors')->where('providor_id',$provider)->first();
        //dd($providers);
        $curency=DB::table('currency_rate')->where('id_currency',$info->currency)->first();
       //dd($curency);
       $price=$curency->value_to_usd * $price;
       $delivery_fees=$price* $providers->smart_percentage;
       $provider_fees= $price* $providers->providor_percentage;
       //dd($delivery_fees, $provider_fees);
       $amount_to_refund = $price - ($delivery_fees + $provider_fees);
      //dd($amount_to_refund);
      $data = DB::table('website_info')->first();
       //envoer les information de payement a la table sales_transaction
       $online_payment_transaction=DB::table('online_payment_transaction')->insert([
           'seller_number' =>$data->info_id,
           'management_fees' => $delivery_fees,
           'payment_provider' => $provider,
           'payment_id' => $request->paymentId,
           'provider_fees' => $provider_fees,
           'order_number' => 0,
           'transaction_type' => 'credit',
           'transaction_from' =>'website_sales',
           'buyer_number' =>  $customer->Customers_Numbers,
           'total_transaction_amount' => $price,
           'amount_to_refund' =>   $amount_to_refund,
           //'website_sales_number' => $salesnumber,
       ]);
        return response()->json([
            'message' => 'Don enregistrées avec succès',
            'data' => $data

        ], 200);







    }

}
