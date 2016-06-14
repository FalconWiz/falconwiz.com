#!/bin/bash
export AWS_PUBLIC_IP=`curl http://169.254.169.254/latest/meta-data/public-ipv4` && echo $AWS_PUBLIC_IP
