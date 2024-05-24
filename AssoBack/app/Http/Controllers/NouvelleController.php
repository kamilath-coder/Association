<?php

namespace App\Http\Controllers;

use App\Models\WebPage;
use App\Models\Nouvelles;
use App\Models\WebSiteInfo;
use Illuminate\Http\Request;

class NouvelleController extends Controller
{

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

    public function NouvelleBaner(){

        $banner=WebPage::with('banner')->where('name','News')->first();
        if($banner){
            $banner->banner->picture=base64_encode($banner->banner->picture);


            return response()->json([
                'message'=>'Informations du site récupérées avec succès',
                'info' => $banner,
            ],
            200);
        }



    }

    public function articles(){
        $article=Nouvelles::all();
        if($article){
            foreach($article as $art){
                $art->picture=base64_encode($art->picture);
                $art->reference_doc=base64_encode($art->reference_doc);
            }
            return response()->json([
                'message'=>'Informations du site récupérées avec succès',
                'info' => $article,
            ],
            200);
        }


    }

    public function voirarticle($id){
        $article=Nouvelles::find($id);
        if($article){
            $article->picture=base64_encode($article->picture);
            $article->reference_doc=base64_encode($article->reference_doc);
            return response()->json([
                'message'=>'Informations du site récupérées avec succès',
                'info' => $article,
            ],
            200);
        }
    }

    public function recentarticle(){
        $article=Nouvelles::orderBy('last_update_date', 'desc')->first();
        if($article){
            $article->picture=base64_encode($article->picture);
            return response()->json([
                'message'=>'Informations du site récupérées avec succès',
                'info' => $article,
            ],
            200);
        }

    }
}
