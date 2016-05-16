resource "aws_instance" "production" {
  ami = "ami-fce3c696"
  instance_type = "t2.micro"
}
