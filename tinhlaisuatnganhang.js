let money= +prompt('Nhập số tiền muốn vay');
let ls = +prompt('Nhập lãi suất trên/năm');
let time= +prompt('Nhập thời gian');
sum= money+money*(ls/100)*time;
document.write('Số tiền phải trả sau'+time+'năm là:'+sum+'triệu VNĐ');