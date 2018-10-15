## Nội dung

1. [Define props & State](#Defind-props-&-State)
2. [Generics](#Generics)
3. [HOCS vs Generics](#HOCS-vs-Generics)
4. [Render Props vs Generics](#-Render-Props)

## Defind props & State

- Định nghĩa kiểu của Props và State.
- Xác định giá trị mặc định của Props

## Generics

- Mục đích: Tạo ra component động ( render ra mảng chuỗi, mảng số, hoặc mảng có cấu trúc) đi kèm với kiểm tra kiểu.

## HOCS vs Generics

- Kết hợp generics và Hocs để kiểm tra kiểu dữ liệu
- Có 2 loại HOCS chính:

* Enhancers: dựa vào props được truyền vào để xử lý logic.
* Injectors: tạo ra logic rồi chuyền thêm logic vào component được bọc.

## Render Props

- Hạn chế của HOCs

* Khó xác định props là của Hocs nào khi có nhiều Hocs lồng nhau.
* Có khả năng xảy ra trùng tên trong props.

- Giải quyết hạn chế của HOCs
