document.addEventListener('DOMContentLoaded', () => {

    const photoGrid = document.getElementById('photoGrid');



    // 照片数据

    const photos = [

        { src: 'images/photo1.jpg', description: '美丽的日落', width: 300, height: 200 },

        { src: 'images/photo2.jpg', description: '城市夜景', width: 300, height: 200 },

        { src: 'images/photo3.jpg', description: '海滩漫步', width: 300, height: 200 },

        { src: 'images/photo4.jpg', description: '山间小屋', width: 300, height: 200 },

        { src: 'images/photo5.jpg', description: '繁华街道', width: 300, height: 200 },

        { src: 'images/photo6.jpg', description: '宁静湖泊', width: 300, height: 200 },

        { src: 'images/photo7.jpg', description: '森林小径', width: 300, height: 200 },

        { src: 'images/photo8.jpg', description: '古老建筑', width: 300, height: 200 },

        // 添加更多照片...

    ];



    // 加载照片

    function loadPhotos() {

        photoGrid.innerHTML = '';

        photos.forEach(photo => {

            const photoItem = document.createElement('div');

            photoItem.classList.add('photo-item');

            photoItem.innerHTML = `

                <img src="${photo.src}" alt="${photo.description}" width="${photo.width}" height="${photo.height}">

                <p class="photo-description">${photo.description}</p>

            `;

            photoGrid.appendChild(photoItem);

        });

    }



    // 初始加载所有照片

    loadPhotos();

});
