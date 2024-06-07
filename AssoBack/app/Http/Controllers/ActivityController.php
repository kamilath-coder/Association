<?php

namespace App\Http\Controllers;

use App\Models\Sales;
use App\Models\WebPage;
use App\Models\Activity;
use App\Models\Customers;
use App\Models\Nouvelles;
use App\Models\WebSiteInfo;
use Illuminate\Http\Request;

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



    public function store(Request $request){
        $datas = WebSiteInfo::first();
        //dd($email->email);
        $data = $request->validate([
            'prix' => 'required',
            'email' => 'required|email|max:255',

        ],[
            'prix.required' => 'Le prix est obligatoire',
            'email.required' => 'L\'email est obligatoire',
            'email.email' => 'L\'email doit être une adresse email valide',
        ]);


        $details = [
            'prix' => $data['prix'],
            'email' => $data['email'],
        ];
        $customer = Customers::where('E-mails',$data['email'])->first();

        if($customer){
            $customer->Names=$data['email'];
        }else{
            $customer->Names=$data['email'];
            $customer->{'E-mails'}=$data['email'];
            $customer->Country='Cameroun';
            $customer->Province='Littoral';
            $customer->City='Douala';
            $customer->Adresses='Douala';
            $customer->Postal_Code='00237';
            $customer->Categories='Activity';
            $customer->User='admin';
            $customer->save();
        }

        $sales= new Sales();
        $sales->Items_Numbers=1;
        $sales->Quantities=1;
        $sales->{'Unique Prices'}=$data['prix'];
        $sales->Amount_Paid=$data['prix'];
        $sales->delivered="No";
        $sales->Dates=date('Y-m-d');
        $sales->Customers_Numbers=$customer->Customers_Numbers;

        $sales->User='admin';
        $sales->save();

        return response()->json([
            'message' => 'Don enregistrées avec succès',
            'data' => $data

        ], 200);







    }

}
