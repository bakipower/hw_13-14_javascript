        // Урок 13
        // 1
        let number = 1;
        while (number<=5){
                console.log(number)
                number++
        }

        
        for (var i=1; i<=5; i++){
                console.log(i)
        }

        // 2
        let number = 5;
        while (number>0){
                console.log(number);
                number--
        }
        

        // 3
        for (var i=1; i<=10; i++){
                a = 3 * (i);
                console.log(a);
        }

        let a = 1;
        while (a<=10){
                const b = 3*(a);
                console.log(b);
                a++
        }


        // 4
        let number = prompt('Введите любое целое положительное число:')

        if (number > 0){
                let sum = 0;
                for (let i=1; i <= number; i++) {
                sum = sum + i;
                }
                console.log('Сумма:', sum);
        }
        
        

        // Урок 14
        // 1
        const arr = [];
        for (i=1; i<=99; i++){
            if (i%2 == 1){
                arr.push(i);  
            }
        }
        console.log(arr);

        // 2
        const arr = [];
        for (i=2; i<=20; i++){
            if (i%2 == 0){
                arr.push(i);  
            }
        }
        console.log(arr);
      
        // 3
        const arr = [];
        let sum = 0;
        for (i=2; i<=20; i++){
            if (i%2 == 0){
                arr.push(i);  
                sum = sum + arr(i);
            }
        }
        console.log(sum);

        
        // Урок 16
        const sapsanStudent = {
            name: "Saule",
            surname: "Nazarbayeva",

        }

        sapsanStudent.name = "Akmaral";
       
        delete sapsanStudent.name;
        
        sapsanStudent.age = "24";
        console.log(sapsanStudent);



        function isEmpty(obj) {
            if (JSON.stringify(obj) == '{}') {
                return true;
            } else {
                return false;
            }
        }
      
        isEmpty(sapsanStudent);
