composer dump-autoload
 
php artisan migrate:fresh 
php artisan migrate --path=database/migrations/base/ --force


php artisan passport:install
php artisan key:generate

php artisan db:seed

php artisan ziggy:generate
php artisan storage:link
npm run production