Proyecto: EcoMarket - Venta de Chía

Seguridad en AWS:

Se aplicó el principio de menor privilegio mediante IAM en Amazon Web Services.

Ejemplo de política:

{
 "Version": "2012-10-17",
 "Statement": [
  {
   "Effect": "Allow",
   "Action": ["s3:*"],
   "Resource": ["arn:aws:s3:::eco-chia-bucket/*"]
  }
 ]
}

Además:
- Se habilitan puertos 80 y 443 para acceso web.
- El puerto 3306 (MySQL) solo es accesible desde el backend.
- Se recomienda usar Amazon GuardDuty para detección de amenazas.