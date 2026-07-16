<script>
   let name = "willan mwangi";
   let age = 26;
   let isStudent = true;
   const date= new Date("16 july 2026");

   console.log(typeof name);
   console.log(typeof age);
   console.log(typeof isStudent);
</script>
<script>
   let width = 100;
   let height = 200;
   let area = width * height;
   console.log(typeof area);
   console.log(area);
</script>
<script>
    let celsius = 45;
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(typeof fahrenheit);
    console.log(fahrenheit); 
</script>
<script>
    let number = 10;
    const evenOrOdd = (number % 2 === 0) ? "even" : "odd";
    console.log(typeof evenOrOdd);
    console.log(evenOrOdd);
</script>

<script>
    let name= "willan mwangi"
    let parts= name.split(" ");
    let initials= parts.map(word => word.[0].toUpperCase()).join("");
    console.log(initials);
</script>
