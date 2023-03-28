<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Valentines Flowers-Order your flowers online</title>
  <style>
    .top-column{
      height: 100px;
      margin-top: 0px;
    }
  .bigColumn{
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .column{
    display: inline-block;
    height:350px;
    width:250px;
    background-color:white;
    margin-top: 10px;
    margin-left: 10px;
    font-size:16px;
    font-weight: bold;
  }
  .column2{
    height:415px;
    width:270px;
    background-color: #ccc;
    margin-top: 6px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  .bottomFormsColumn{

    height:75px;
    width:1050px;
    background-color:#ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:auto;
  }
  
  .body{
    background-color: #666;
  }

  .text{
    text-align: center;
	font-family: Papyrus, fantasy;
	color: white;
	text-align: center;
	font-size: 40px;
	margin: 40px 20px 80px 20px;
	
  }
    .text1{
	text-align: center;
	color: #B2BEB5;
	font-family: Arial, Helvetica, sans sans-serif;
  }
  .text2{
	text-align: center;
	color:#9F2B68;
  font-family:Segoe UI Semibold;
  }
  .image{
	margin-left:8px;
	margin-top:8px;
  }
</style>
</head>
<body class="body">
  <div class="top-column">
    <h1 class="text">Valentine Flowers</h1>
    </div>

  <div class="bigColumn">
    <div class="column">
      <img class="image" src="pink.jpeg" alt="pink flowers">
      <p class="text1">White Bouquet</p>
      <p class="text2">24</p>
    </div>
    <div class="column">
      <img class="image" src="pink.jpeg" alt="pink flowers">
      <p class="text1">White Bouquet</p>
      <p class="text2">24</p>
    </div>
    <div class="column">
      <img class="image" src="pink.jpeg" alt="pink flowers">
      <p class="text1">White Bouquet</p>
      <p class="text2">24</p>
    </div>
    <div class="column2">
      <p class="text1">Your order:</p>
      <div class="column">
        <img class="image" src="pink.jpeg" alt="pink flowers">
        <p class="text1">White Bouquet</p>
        <p class="text2">24</p>
      </div>
    </div>
  </div>
    <br>
    <br>
    <div class="bottomFormsColumn">
      <form>
        <label for="bouquetOptions"> Bouquet Options</label><br>
        <select name="bouquetOptions" id="bouquetOptions">
          <option value="pleaseSelect">Please Select</option>
          <option value="withChampagne">With Champagne</option>
          <option value="extra">50% Extra Flowers</option>
          <option value="extraWithChampagne">for the option with 50% Extra Flowers and Champagne</option>
        </select>

        Bouquet color:
        <input type="radio" id="white" name="color" value="white">
        <label for="white">White</label>
        <input type="radio" id="pink" name="color" value="pink">
        <label for="pink">Pink</label>
        <input type="radio" id="red" name="color" value="red">
        <label for="red">Red</label>
        <input type="button" value="Place your order" name="orderButton">
        <input type="button" value="reset" name="resetButton">
      </form>
    </div>

</body>
</html>
