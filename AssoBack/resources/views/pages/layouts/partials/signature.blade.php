<?php
	/**
	 * Created by PhpStorm.
	 * User: adiag
	 * Date: 20/07/2022
	 * Time: 16:50
	 */
?>

<!-- need variable : $data-->
<div class="d-flex align-items-center mb-2">
    <div>
    <span color="#049D04" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(4, 157, 4);">
        <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" color="#049D04" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(4, 157, 4);">
    </span>
    </div>
    <div style="padding: 0px; margin-left:8px; color: rgb(0, 0, 0);">
        <a href="tel:{{$data->phone}}" color="#000000" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;">
            <span>{{$data->phone}}</span>
        </a>
    </div>

</div>
<div class="d-flex align-items-center mb-2">
    <div>
    <span color="#049D04" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(4, 157, 4);">
        <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="#049D04" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(4, 157, 4);">
    </span>
    </div>
    <div style="padding: 0px; margin-left: 8px; color: rgb(0, 0, 0);">
        <a href="mailto:{{$data->email}}" color="#000000" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;">
            <span>{{$data->email}}</span>
        </a>
    </div>

</div>
<div class="d-flex align-items-center mb-2">
    <div>
    <span color="#049D04" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(4, 157, 4);">
        <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#049D04" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(4, 157, 4);">
    </span>
    </div>
    <div style="padding: 0px; margin-left: 8px; color: rgb(0, 0, 0);">
        <a href="{{ $website ?? 'https://smart-consulting.ca'}}" target="_blank" color="#000000" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;">
            <span>{{ $website ?? 'smart-consulting.ca'}}</span>
        </a>
    </div>

</div>
<div class="d-flex align-items-center mb-2">
    <div>
    <span color="#049D04" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(4, 157, 4);">
        <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png" color="#049D04" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(4, 157, 4);">
    </span>
    </div>
    <div style="padding: 0px; margin-left: 8px; color: rgb(0, 0, 0);">
    <span color="#000000" class="sc-csuQGl CQhxV" style="font-size: 12px; color: rgb(0, 0, 0);">
        <span>{{$data->address}}</span>
    </span></td>
    </div>

</div>


