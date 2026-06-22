shell  rpm  vsftpd.VERSTION.rpm
# efault: on
# description:
#   The vsftpd FTP server serves FTP Connections. 
#   normal. unencrypted userames and passwords for authentication.
# vsftpd 1s designed to be secure.
service ftp
{
        sockt_type              = stream
        wait                    = no
        user                    = root
        server                  = /usr/local/sbin/vsftpd
#       server args             =
#       log on failure          += DURATION USERID
#       log on failure          += USERID
        nice                    = 10
        disable                 = no
}
