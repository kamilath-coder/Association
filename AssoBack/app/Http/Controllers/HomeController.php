<?php

namespace App\Http\Controllers;

use App\Models\WebPage;
use App\Models\NewsLetter;
use App\Models\Partenaire;
use App\Models\WebSiteInfo;
use Illuminate\Http\Request;
use App\Models\WebAboutUsTeam;

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

        $banner=WebPage::with('banner')->where('name','Home')->first();
        if($banner){
            $banner->banner->picture=base64_encode($banner->banner->picture);


            return response()->json([
                'message'=>'Informations du site récupérées avec succès',
                'info' => $banner,
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
        $request->validate([
            'email' => 'required|unique:web_news_letter,email',
        ],[
            'email.unique' => 'Cet email est déjà inscrit à la newsletter.',
        ]);
        $newsletter = new NewsLetter;
        $newsletter->email = $request->email;
        $newsletter->save();

        //Ici, vous pouvez ajouter le code pour ajouter l'email à votre base de données ou à votre service de newsletter

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
}
