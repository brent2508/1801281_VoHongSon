let i = 0

        function dangky(){
            let hoten = document.getElementById("txtHoten").value
            let errorHoten = document.getElementById("errorHoten")

            let soDT = document.getElementById("txtSoDT").value
            let regexSoDT = /^[0-9]{9,10}$/
            let errorSoDT  = document.getElementById("errorSoDT")

            if(hoten.trim()==""){
                errorHoten.innerHTML = "Tên đăng nhập không bỏ trống"
                return false
            }
            if(soDT.trim() != "" && !regexSoDT.test(soDT)){
                errorSoDT.innerHTML = "mật khẩu có 9 or 10 kí tự"
                return false
            }

            errorHoten.innerHTML = "*"
            errorSoDT.innerHTML = "*"

            let gioitinh = "Nam"
            let gioitinhNu = document.getElementById("rdoNu").checked
            if(gioitinhNu)
                gioitinh = "Nu"

            let row = "<tr><td>"+(++i)+"</td><td>"+hoten+"</td><td>"+gioitinh+"</td><td>"+soDT+"</td><td>"+"</td></tr>"

            let myTable = document.getElementById("tbl")

            let newRow = myTable.insertRow(myTable.rows.length)

            newRow.innerHTML = row

            return true

        }