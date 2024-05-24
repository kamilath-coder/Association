<?php

namespace App\Http\Controllers;

use App\Models\WebPage;
use App\Models\WebSiteInfo;
use Illuminate\Http\Request;
use App\Models\WebAboutUsTeam;

class AboutController extends Controller
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
    public function AboutBaner(){

        $banner=WebPage::with('banner')->where('name','About Us')->first();
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

        $members=WebAboutUsTeam::all();

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
}
