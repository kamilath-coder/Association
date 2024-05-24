<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WebSiteInfo extends Model
{
    use HasFactory;
    protected $table = 'website_info';
    protected $primaryKey = 'Customers_Numbers';
    public $timestamps = false;
    protected $fillable = [
        'Customers_Numbers',
        'name',
        'Type',
        'phone',
        'email',
        'address',
        'maps_localisation',
        'fr_footer_text',
        'footer_text',
        'logo',
        'short_logo',
        'currency',
        'payment_type',
        'shipping_details',
        'fr_shipping_details',
        'cash_on_delivery_details',
        'fr_cash_on_delivery_details',
        'support_details',
        'fr_support_details',
        'Opening_hours',
        'allow_concurrent_booking',
        'fr_Opening_hours',
        'Shipping_Policy',
        'fr_Shipping_Policy',
        'Privacy_Policy',
        'fr_Privacy_Policy',
        'terms_Conditions',
        'presentation_title',
        'fr_presentation_title',
        'fr_terms_Conditions',
        'subscription_policy',
        'fr_subscription_policy',
        'refund_policy',
        'fr_refund_policy',
        'presentation_text',
        'fr_presentation_text',
        'presentation_photo',
        'presentation_photo2',
        'az_link',
        'facebook_link',
        'google_link',
        'twitter_link',
        'linkedin_link',
        'instagram_link',
        'rss_link',
        'youtube_link',
        'tiktok_link',
        'spotify',
        'api_public_key',
        'api_src',
        'text2',
        'fr_text2',
        'text3',
        'fr_text3',
        'title2',
        'fr_title2',
        'title3',
        'fr_title3',
        'reservation_text',
        'fr_reservation_text',
        'sale_text',
        'fr_sale_text',
        'file',
        'fr_file'
    ];



}
