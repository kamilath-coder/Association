<?php

namespace App\Http\Controllers;

use App\Mail\Contact;
use App\Models\WebPage;
use App\Models\WebSiteInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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
            ], 200);

        }



    }

    public function store(Request $request)
    {
        $datas = WebSiteInfo::first();
        //dd($email->email);
        //je ne fait plus le validate
        $data = $request->all();
        
        $details = [
            'nom' => $data['nom'],
            'email' => $data['email'],
            'sujet' => $data['sujet'],
            'message' => $data['message'],
        ];


        //ENVOYER LE MAIL A L'ADMIN DU SITE
        $mail=new Contact($details,$datas);

        Mail::to($datas->email)->send($mail);
        return response()->json([
        'message' => 'Formulaire envoyé avec succès',
        'data' => $data

        ], 200);
    }



}
