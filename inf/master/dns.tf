resource "aws_route53_record" "a" {
   zone_id = "${var.zone_id}"
   name = "${var.zone_name}"
   type = "A"
   records = ["${aws_instance.master.public_ip}"]
}

resource "aws_route53_record" "www" {
   zone_id = "${var.zone_id}"
   name = "www.${var.zone_name}"
   type = "CNAME"
   records = ["${var.zone_name}"]
}