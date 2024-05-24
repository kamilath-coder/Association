<?php

namespace App\Http\Controllers;

use App\Models\WebPage;
use App\Models\WebSiteInfo;
use Illuminate\Http\Request;

class ContactController extends Controller
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
    public function ContactBaner(){

        $banner=WebPage::with('banner')->where('name','Contacts')->first();
        if($banner){
            $banner->banner->picture=base64_encode($banner->banner->picture);


            return response()->json([
                'message'=>'Informations du site récupérées avec succès',
                'info' => $banner,
            ],
            200);
        }



    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nom' => 'required|max:255',
            'email' => 'required|email|max:255',
            'sujet' => 'required|max:255',
            'message' => 'required',
        ]);



        return response()->json(['message' => 'Formulaire envoyé avec succès',
        'data' => $data

        ], 200);
    }



}
