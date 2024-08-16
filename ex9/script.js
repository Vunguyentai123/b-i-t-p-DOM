// Hàm đếm số lượng <div> và hiển thị kết quả
        function countDivs() {
            // Lấy tất cả các phần tử <div> trong tài liệu
            const divs = document.getElementsByTagName('div');
            // Đếm số lượng phần tử <div>
            const count = divs.length;
            // Hiển thị số lượng phần tử <div> trong phần tử có id là 'countDisplay'
            document.getElementById('countDisplay').textContent = `Số lượng phần tử <div> trên trang là: ${count}`;
        }

        // Gọi hàm countDivs sau khi tài liệu đã được tải hoàn tất
        window.onload = countDivs;