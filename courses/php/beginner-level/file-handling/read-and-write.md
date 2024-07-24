---
id: lesson-2
title: "Uploading Files"
sidebar_label: Uploading Files
sidebar_position: 2
description: "Learn Uploading Files in PHP"
tags: [courses,beginner-level,php,Introduction]
---   
 
 

File uploads are handled using HTML forms and PHP. The `$_FILES` superglobal is used to access file details.

**HTML Form:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>File Upload Form</h2>
<form action="upload.php" method="post" enctype="multipart/form-data">
  Select file to upload:
  <input type="file" name="fileToUpload" id="fileToUpload">
  <input type="submit" value="Upload File" name="submit">
</form>

</body>
</html>
```

**PHP Script (upload.php):**

```php
<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$fileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.<br>";
    $uploadOk = 0;
}

// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "Sorry, your file is too large.<br>";
    $uploadOk = 0;
}

// Allow certain file formats
if ($fileType != "jpg" && $fileType != "png" && $fileType != "jpeg" && $fileType != "gif") {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.<br>";
    $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.<br>";
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file " . htmlspecialchars(basename($_FILES["fileToUpload"]["name"])) . " has been uploaded.<br>";
    } else {
        echo "Sorry, there was an error uploading your file.<br>";
    }
}
?>
```

#### Output

<BrowserWindow>
    <div>
        <h2>File Upload Form</h2>
        <p id="notify" style={{textAlign:"center",fontWeight:"700",fontSize:"1.2rem"}}></p>
        <p id="additional" style={{fontFamily:"monospace",fontSize:"1.3rem",fontWeight:"600",textAlign:"center"}}> </p>
        <form onSubmit={(e)=>{
            e.preventDefault() 
            let fileToUpload=document.getElementById("form")
            fileToUpload.style.display="none"
            let notify=document.getElementById("notify")
            let additional=document.getElementById("additional")
            notify.textContent="Uploading ..."
            notify.style.color="blue"
            setTimeout(()=>{
                notify.textContent="✔ success"
                notify.style.color="green"
                additional.textContent="Thank You for Submitting..!"
            },2500)
        }} id="form">
            <label for="fileToUpload">Select file to upload:</label>
            <br />
            <input type="file" id="fileToUpload" name="fileToUpload" style={{padding:"1rem 5rem"}} required />
            <br /><br />
            <input style={{color:"white",background:"purple",padding:"0.5rem 2rem",border:"none",borderRadius:"0.6rem",cursor:"pointer"}} type="submit" value="Upload File" name="submit" />
        </form>
    </div>
</BrowserWindow>


:::tip
- Always check for errors when opening, reading, writing, and closing files.
- Use appropriate file permissions to ensure security.
- Sanitize file names and check file types to prevent malicious file uploads.
- Use the `enctype="multipart/form-data"` attribute in the form tag for file uploads.
- Validate the size and type of the uploaded files to prevent security issues.
:::