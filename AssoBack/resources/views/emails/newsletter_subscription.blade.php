@extends('../pages/layouts/email')

@section('content')
    {{-- <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        .container {
            width: 80%;
            margin: auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            margin-top: 10px;
        }
        h1 {
            color: #444;
        }
        p {
            color: #666;
        }
    </style>
    <div class="container">
        <h1>Bonjour {{$info->name}},</h1>
    <p> Vous avez réçu un message de la part de  {{ $details['nom'] }}
     voici  son contenu </p>
    <p> {{ $details['message'] }} </p>
    </div> --}}

    <div class="row">
        {{-- {!! $request->message !!} --}}
        <div>
            <h4 class="text-center fw-bold mb-5"> La souscription à la newsletter a été effectuée avec succès
                voici  les informations de l'utilisateur </h4>

        </div>
    </div>
    <div>
        {{-- <fieldset class="border p-2">
            <legend class="float-none w-auto p-2 h5 fw-bold">Informations de Contact</legend>
            <ul class="list-group">
                <li class="list-group-item">
                    <span class="fw-bold">Nom : </span>
                    <span>{{ $details['nom'] ?? null }}</span>
                </li>
                <li class="list-group-item">
                    <span class="fw-bold">Email : </span>
                    <span>{{ $request->time ?? null }}</span>
                </li>
            </ul>
        </fieldset>
        <fieldset class="border p-2">
            <legend class="float-none w-auto p-2 h5 fw-bold">Message</legend>
            <ul class="list-group">
                <li class="list-group-item">
                    <span class="fw-bold">Objet du message : </span>
                    <span>{!! $details['sujet'] ?? null !!}</span>
                </li>
                <li class="list-group-item">
                    <span class="fw-bold">Message : </span>
                    <span>{!!  $details['message']  ?? null !!}</span>
                </li>
            </ul>
        </fieldset> --}}
        <fieldset class="border p-2">
            <legend class="float-none w-auto p-2 h5 fw-bold">Informations de l'entreprise</legend>
            <ul class="list-group">
                <li class="list-group-item">
                    <span class="fw-bold">E-mail : </span>
                    <span>{!! $info->email ?? null !!}</span>
                </li>
                <li class="list-group-item">
                    <span class="fw-bold">Téléphone : </span>
                    <span>{!! $info->phone ?? null !!}</span>
                </li>
                <li class="list-group-item">
                    <span class="fw-bold">Adresse : </span>
                    <span>{!! $info->address ?? null !!}</span>
                </li>
            </ul>
        </fieldset>

    </div>
@endsection

