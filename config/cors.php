<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    // CORSを適用するルートのパスを指定
    'paths' => ['api/*', 'sanctum/csrf-cookie', 'login', 'register'],

    // 許可するHTTPメソッドを指定（'GET', 'POST', 'PUT', 'DELETE' などを個別に指定することも可能）
    'allowed_methods' => ['*'],

    // 許可するオリジンを指定。開発中は'*'で全てを許可し、本番では特定のオリジンに限定
    'allowed_origins' => ['*'],

    'allowed_origins_patterns' => [],

    // 許可するHTTPヘッダーを指定
    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    // 認証情報を含むリクエストを許可するかどうか
    'supports_credentials' => true,

];
