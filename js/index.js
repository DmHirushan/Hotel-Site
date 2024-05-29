
        // var dialog = document.getElementById('dialog');
        // var overlay = document.querySelector('.overlay');
        // var mainContent = document.querySelector('.mainContent');

        // function openDialog() {
        //     fetch('/pages/hotel-details.html')
        //         .then(response => response.text())
        //         .then(data => {
        //             dialogContent.innerHTML = data;
        //             dialog.style.display = 'block';
        //             overlay.style.display = 'block';
        //             // document.querySelector('.mainContent').classList.add('blur');
        //         });
        // }

        // function closeDialog() {
        //     dialog.style.display = 'none';
        //     overlay.style.display = 'none';
        // }


        // function openPopup() {
        //     // Open a new window with the specified HTML file
        //     var popupWindow = window.open('/pages/cards/card1.html', 'popupWindow', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no,resizable=no');

        //     // Focus the new window
        //     if (popupWindow) {
        //         popupWindow.focus();
        //     }
        //     return false; // Prevent the default behavior of the hyperlink
        // }




        // function showPopup(url) {
        //     var popupDialog = document.getElementById('popupDialog');
        //     var popupContent = document.getElementById('popupContent');
        //     popupContent.src = url;
        //     popupDialog.showModal();
        // }
        
        // function hidePopup() {
        //     var popupDialog = document.getElementById('popupDialog');
        //     popupDialog.close();
        // }
        

        var popupDialog = document.getElementById('popupDialog');
        var popupContent = document.getElementById('popupContent');
        var scrollPosition = 0;

        function showPopup(url) {
            // Save current scroll position
            scrollPosition = window.scrollY;

             // Add blur class to main content
            // mainContent.classList.add('blur');

            // Set content URL
            popupContent.src = url;

            // Show modal
            popupDialog.showModal();
        }

        function hidePopup() {
            // Remove blur class from main content
            // mainContent.classList.remove('blur');

            // Close modal
            popupDialog.close();

            // Restore scroll position
            window.scrollTo(0, scrollPosition);
        }

        
        
