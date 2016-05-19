#!/bin/bash
wget https://dl.eff.org/certbot-auto
chmod a+x certbot-auto
./certbot-auto certonly -d falconwiz.com -d www.falconwiz.com --rsa-key-size 4096 --webroot --webroot-path /var/www/falconwiz.com/
