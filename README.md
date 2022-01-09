# bannerCreatorFromSpotify

# [TR]

Merhabalar!
Twitter hesabınızın bannerini Spotify'da son dinlediğiniz şarkının bilgileri ile hazırlanmış özel bir tasarım ile değiştirir.

## Nasıl kurulur?
Bu açık kaynak kod projesi geliştiriciler içindir ve bu botu yerel makinanıza kurmak için Twitter ve Spotify'da geliştirici hesaplarınızın bulunması gerekmektedir.
* config.json dosyasının içerisindeki bilgileri doldurmanız ve bir callback adresi girmeniz gerekmektedir.
* Yeni bir terminal açıp ``npm install`` komutunu kullanarak gerekli olan NodeJS kütüphanelerini indirmelisiniz.
* Terminale gelip ``npm run devStart`` yaparak uygulamayı başlatabilirsiniz, sonrasında ise ``/login`` alanına yönelerek Spotify hesabınızı bağlamanız gerekmektedir.
* Son adım olarak ise ``index.html`` dosyasını açmak, botumuz her 1 dakikada Spotify hesabınızda anlık veya son dinlediğiniz şarkının bilgilerini alarak tasarıma dökecektir.

## Nasıl çalışır, hangi kütüphaneler kullanıldı?
Twitter ve Spotify uygulamalarının bağlanması sonrasında uygulama terminalden çalıştırılır ve Spotify hesap bağlantısı için ``/login`` adresine yönlenirsiniz.
Spotify hesabınızı bağladıktan sonra ``index.html`` dosyasını açarak ``Axios`` ile bir GET requesti yollayarak şarkı bilgilerini çekersiniz. ``Express`` bu durumda request bağlantısını alarak Spotify hesabınızla bir sorgulama işlemi yapar. O anda dinlediğiniz veya son dinlediğiniz şarkının bilgilerini çekerek .html dosyasına geri gönderir. Gelen veriler ``Vue.JS``'e aktarılır ve tasarım öncelikle DOM'a dökülür. Bu işlem tamamlandıktan sonra ``dom-to-image`` kütüphanesi sayesinde DOM'u .jpeg dosyasına dönüştürerek base64 bir bağlantısını alır. Bu bağlantıyı bannerin değişmesi için Express'a yollar ve Twitter botu burada aktifleşerek gerekli veriler alarak bannerin değişmesi için bir istek yollar. İstekten gelen yanıtları konsolda görüntüleyebilirsiniz.

[EN]

Hello!
It replaces the banner of your Twitter account with a special design prepared with the information of the song you last listened to on Spotify.

## How to install?
This open source code project is for developers and you need to have developer accounts on Twitter and Spotify to install this bot on your local machine.
* You need to fill in the information in the config.json file and enter a callback address.
* You should open a new terminal and download the required NodeJS libraries using ``npm install`` command.
* You can start the application by coming to the terminal and doing ``npm run devStart``, then you need to connect your Spotify account by going to the ``/login`` field.
* As the last step, opening the ``index.html`` file, our bot will take the information of the song you listened to instantly or last in your Spotify account every 1 minute and pour it into the design.

## How does it work, which libraries were used?
After connecting Twitter and Spotify applications, the application is run from the terminal and you are directed to ``/login`` for Spotify account connection.
After connecting your Spotify account, you open the ``index.html`` file and send a GET request with ``Axios`` and get the song information. In this case, ``Express`` takes the request link and makes an inquiry with your Spotify account. It extracts the information of the song you are currently listening to or the last song you listened to and sends it back to the .html file. Incoming data is transferred to ``Vue.JS`` and the design is first poured into the DOM. After this process is complete, it gets a base64 link by converting the DOM to a .jpeg file thanks to the ``dom-to-image`` library. It sends this link to Express to change the banner, and the Twitter bot activates here and receives the necessary data and sends a request to change the banner. You can view the responses from the request in the console.

## Örnek - Example

![Example](https://media.discordapp.net/attachments/874292117869060096/929725875161804890/unknown.png?width=534&height=582)
