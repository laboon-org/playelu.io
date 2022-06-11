
// Process url api function
/*
    Đây là phương thức lấy danh sách gồm các key và value từ API
    rồi tách key ra thành từng object key nhỏ, sau đó gán value vào object key cuối cùng
    Cách hoạt động của phương thức như sau:
    1. Lấy danh sách dynamicContents từ API về (gồm key và value).
        Trong đó key có dạng key1_key[n]_lastKey. Ví dụ: image_homeBackground_star5
        Và value là url của ảnh sẽ dc đặt tên là lastKey. Ví dụ: star5: https://storage.gapis.com/laboon/elu/star5.webp

    2. Tạo một hàm process nhận các tham số là:
        obj: Object dc dùng để phân chia các url ảnh vào đó theo key đã dc phân tách.
        name: là một array chứa các giá trị là các string dc tách ra từ một key đã lấy từ API.
            VD: key = 'image_homeBackground_star5' => name = [image, homeBackground, star5]
        value: là value tương ứng với key đã lấy từ API

    3. Hàm process làm những việc như sau:
        * Trường hợp 1: name[0] chưa tồn tại trong obj. VD: name[0] = image chưa tồn tại trong obj
            - Tạo array temp chứa các giá trị của name ngoại trừ name[0].
                VD: name = [image, homeBackground, star5] => temp = [homeBackground, star5]
            - Đặt name[0] thành key của obj với value là một object khác, bằng cách gán: obj[name[0]],
                VD: obj = {image: {}}
            - Tạo một biến valueNew gọi đến process theo cách đệ quy, sau đó truyền các đối số tương ứng như sau:
            obj = obj[name[0]]
            name = temp
            value = value
            - Làm thế này để tách từng giá trị của name thành các key trong object,
            với giá trị của từng key là một object, và các giá trị sau của name sẽ là object con của giá trị trước.
            - Liên tục đệ quy như thế cho đến giá trị cuối cùng của name. => Trường hợp 3
                VD:
                obj =
                {
                    image:
                    {
                    homeBackground: { }
                    }
                }

        * Trường hợp 2: name[0] đã tồn tại trong obj. VD: name[0] = image đã tồn tại trong obj
            - Tạo array temp chứa các giá trị của name ngoại trừ name[0].
            - Tạo một biến valueNew để đệ quy process với obj[name[0]] và temp như trường hợp 1.
            + Nếu temp[0] đã tồn tại => trường hợp 2.
            + Nếu temp[0] chưa tồn tại => trường hợp 1.
            - Liên tục đệ quy cho tới giá trị cuối cùng của name => Trường hợp 3

        * Trường hợp 3: name chỉ còn một giá trị.
            - Trả về một phần tử của object với key là name[0]
                và value là value đã truyền vào hàm process từ đầu.
            - Giá trị trả về sẽ dc gán vào biến valueNew đã tạo trong cả 2 trường hợp trên.
            - Tuỳ thuộc vào lần đệ quy cuối cùng là trường hợp nào mà thêm valueNew cho obj theo cách tương ứng
            + Trường hợp 1: Thêm mỗi valueNew vào obj
            + Trường hợp 2: Thêm valueNew vào obj cùng với các giá trị đã có trong obj
                VD: Kết quả cuối cùng:
                obj =
                {
                    image:
                    {
                        homeBackground: { star5: https://storage.gapis.com/laboon/elu/star5.webp }
                    }
                }
*/
