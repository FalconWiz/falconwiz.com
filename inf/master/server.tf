resource "aws_instance" "master" {
  ami = "${var.instance_ami}"
  instance_type = "${var.instance_type}"
  tags {
    Name = "${var.zone_name}"
  }
  key_name = "${var.pubkey}"
  security_groups = ["allow_web_traffic"]
}
