#!/bin/bash
apt-get install letsencrypt
letsencrypt certonly --webroot -w /var/www/falconwiz.com -d falconwiz.com -d www.falconwiz.com
