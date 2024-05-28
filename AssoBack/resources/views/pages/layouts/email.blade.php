<?php
	/**
	 * Created by PhpStorm.
	 * User: adiag
	 * Date: 20/07/2022
	 * Time: 16:51
	 */
?>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Le learder de la transformation digitale en Afrique">
    <meta name="author" content="Africa Digitalizer">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link href="{{ asset('assets/css/main.css')}}" rel="stylesheet">
    <title>AZ-COMPANIES.COM</title>

    <style>

        body,
        body *:not(html):not(style):not(br):not(tr):not(code) {
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            position: relative;
        }

        body {
            -webkit-text-size-adjust: none;
            background-color: #ffffff;
            color: #333;
            height: 100%;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            width: 100% !important;
        }

        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;

        }

        .accent-color-bg {
            background-color: #0e3664 !important;
            color: #fff;
        }

        td, th {
            padding: 5px !important;
        }

        .d-flex {
            display: -ms-flexbox !important;
            display: flex !important;
        }

        .justify-content-center {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }

        .align-items-center {
            -ms-flex-align: center !important;
            align-items: center !important;
        }

        .divider {
            border-top: 2px solid #ddd;
            width: 25%;
            margin: auto;
        }

        .body {
            -premailer-cellpadding: 0;
            -premailer-cellspacing: 0;
            -premailer-width: 100%;
            background-color: #edf2f7;
            border-bottom: 1px solid #edf2f7;
            border-top: 1px solid #edf2f7;
            margin: 0;
            padding: 3%;
            width: 100%;
        }

        #container {
            padding: 3% !important;
        }
    </style>

</head>
<body id="container">
@php
    $info=DB::table('website_info')->first();
    $website_info=DB::table('website_info')->first();
@endphp
<div>
    <section class="body">
        <div class="text-wrap">
            @yield('content')
        </div>
        <div style="margin-top:35px;">
            <div class="divider"></div>
            {{-- <div class="d-flex align-items-center justify-content-center" style="margin-top:2px;">
                <img src="{{ asset('public/images/bg/dec/cs-bg.png') }}" alt="Logo AZ-COMPANIES.COM"
                     style="width: 45px; height: 45px;" loading=" lazy"/>
                <div>
                    <a href="https://www.az-companies.com" target="_blank"
                       style="color:#000;font-weight:bold; font-size: 15px; text-decoration:none; text-transform: uppercase;">
                        AZ-COMPANIES.COM
                    </a>
                </div>
            </div> --}}
        </div>
        <div class="row mt-4">
            <hr color="#049D04" direction="horizontal" height="1" class="sc-jhAzac hmXDXQ"
                style="width: 100%; border-bottom: 1px solid rgb(4, 157, 4); border-left: none; display: block;"/>
            {{-- @include('pages.layouts.partials.signature', ['data'=>$info, 'website'=> "{{ route('home') }}"]) --}}
            @include('pages.layouts.partials.signature', ['data' => $info, 'website' =>'https://yogam.africadigitalizer.com/' ])
            <hr color="#049D04" direction="horizontal" height="1" class="sc-jhAzac hmXDXQ"
                style="width: 100%; border-bottom: 1px solid rgb(4, 157, 4); border-left: none; display: block;"/>

        </div>

    </section>

    <footer style="margin-top: 10px; color: gray; text-align: center;">
        <div class="col-12 p-0">

            <div class="d-flex align-items-center justify-content-center m-0 p-0">
                <div class="me-1">
                    <a href="{{$website_info->facebook_link}}" color="#6A78D1" class="sc-hzDkRC kpsoyz"
                       style="display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);">
                        <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                             alt="facebook" color="#6A78D1" height="24" class="sc-bRBYWo ccSRck"
                             style="background-color: rgb(106, 120, 209); max-width: 135px; display: block;">
                    </a>
                </div>
                <div class="me-1">
                    <a href="{{$website_info->twitter_link}}" color="#6A78D1" class="sc-hzDkRC kpsoyz"
                       style="display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);">
                        <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                             alt="twitter" color="#6A78D1" height="24" class="sc-bRBYWo ccSRck"
                             style="background-color: rgb(106, 120, 209); max-width: 135px; display: block;">
                    </a>
                </div>
                <div class="me-1">
                    <a href="{{$website_info->linkedin_link}}" color="#6A78D1" class="sc-hzDkRC kpsoyz"
                       style="display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);">
                        <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                             alt="linkedin" color="#6A78D1" height="24" class="sc-bRBYWo ccSRck"
                             style="background-color: rgb(106, 120, 209); max-width: 135px; display: block;">
                    </a>
                </div>

                <div class="me-3">
                    <a href="{{$website_info->instagram_link}}" color="#6A78D1" class="sc-hzDkRC kpsoyz"
                       style="display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);">
                        <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                             alt="instagram" color="#6A78D1" height="24" class="sc-bRBYWo ccSRck"
                             style="background-color: rgb(106, 120, 209); max-width: 135px; display: block;">
                    </a>
                </div>
                <div style="border-left: 2px solid gray; padding-left: 4px;">
                    <small style="color: gray; text-align: center;">&copy; {{date('Y')}} <a
                                href="https://www.africadigitalizer.com"
                                class="align-items-end d-inline-flex text-white font-weight-bold py-1 my-auto"
                                style="color: #049D04 !important;"> Africa Digitalizer </a> - Tout droit réservé.
                    </small>
                </div>
            </div>
        </div>

    </footer>
</div>
</body>
</html>
