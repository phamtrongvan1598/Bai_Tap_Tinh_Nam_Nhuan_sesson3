let Nam = parseInt(prompt("nhập số"));
let Nam_Khong_Nhuan =false;
if ( Nam %4 == 0 ){
    if ( Nam % 100 == 0 ){
        if ( Nam %400 ==0){
            Nam_Khong_Nhuan = true
        }
    }
else {Nam_Khong_Nhuan = true}
}if (Nam_Khong_Nhuan ){
alert(Nam + "Là Năm Nhuận");}
else {Nam + "Năm Không Nhuận"}
if (Nam <4){Nam_Khong_Nhuan = false}
alert(Nam + "Là Năm Không Nhuận")