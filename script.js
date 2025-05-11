const images = ['/images/pic1(2).jpg', '/images/pic2(1).jpg','/images/pic5.jpg'];
        let currentIndex = 0;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            document.getElementById('slideshow').src = images[currentIndex];
        }, 2000);

        function displayMessage() {  
            const message = "Happy Mother's Day! You are the heart of our family, the glue that holds us together, and the light that brightens even the darkest days. Your love, strength, and kindness are an inspiration to everyone around you. Today and always, we celebrate you and all that you do. 💖";
            const messageElement = document.getElementById('message');
            let index = 0;
            messageElement.textContent = "";

            const interval = setInterval(() => {
                if (index < message.length) {
                    messageElement.textContent += message[index];
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 50);
        }