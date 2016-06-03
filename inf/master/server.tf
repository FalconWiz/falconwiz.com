resource "aws_instance" "master" {
  ami = "${var.instance_ami}"
  instance_type = "${var.instance_type}"
  tags {
    Name = "${var.zone_name}"
  }
  key_name = "${var.pubkey}"
  vpc_security_group_ids = ["${aws_security_group.allow_web_traffic.id}"]
}
