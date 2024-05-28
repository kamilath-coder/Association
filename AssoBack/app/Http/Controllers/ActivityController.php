<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\WebPage;
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
            ],
            200);
        }



    }

    public function articles(){
        $article = Activity::with('category')->whereHas('category', function ($query) {
            $query->where('Names', 'Activity');
        })->get();


        // if($article){
        //     foreach($article as $art){
        //         $art->Pictures=base64_encode($art->Pictures);
        //         $art->item_doc=base64_encode($art->item_doc);
        //         foreach($art->category as $cat){
        //             $cat->Pictures=base64_encode($cat->Pictures);
        //         }
        //     }

        //     return response()->json([
        //         'message'=>'Informations du site récupérées avec succès',
        //         'info' => $article,
        //     ],
        //     200);
        // }

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
        $article=Activity::find($id);
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

    public function recentarticle(){
        // $article=Activity::orderBy('last_update_date', 'desc')->first();
        $article=Activity::first();
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

}
