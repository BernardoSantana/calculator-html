function clicar(){    
        var num1 = document.getElementById("n1")
        var num2 = document.getElementById("n2")
        var op = document.getElementById("operation").value

        var n1 = Number(num1.value)
        var n2 = Number(num2.value)
        var plus = n1 + n2
        var less = n1-n2
        var mul = n1*n2
        var di = n1/n2
        var ex = n1^n1
        

        if (op == "+")
            res.innerHTML = `${n1} and ${n2} will have as a result ${plus}`
            if (op == "-")
                    res.innerHTML = `${n1} and ${n2} will have as a result ${less}`
            if (op == "^")
                    res.innerHTML = `${n1} and ${n2} will have as a result ${ex}`
            if (op == "/")
                    res.innerHTML = `${n1} and ${n2} will have as a result ${di}`
            if (op == "*")
                    res.innerHTML = `${n1} and ${n2} will have as a result ${mul}`
}
