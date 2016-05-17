resource "aws_instance" "master" {
  ami = "ami-fce3c696"
  instance_type = "t2.micro"
  tags {
    Name = "${var.zone_name}"
  }
  key_name = "${var.pubkey}"
  security_groups = ["allow_web_traffic"]
}
