<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div class=" bg-slate-800 text-slate-400 p-4">Index html</div>
    <?php
        $a_bool = TRUE;   // a boolean
        $a_str = "foo";  // a string
        $a_str2 = 'foo';  // a string
        $an_int = 12;     // an integer

        echo gettype($a_bool) ."\n"; // prints out:  boolean
        echo gettype($a_str);  // prints out:  string

        var_dump($an_int); // prints out: int(12)
        var_dump($a_str); // prints out: string(3) "foo"
          ?>
    <!-- <div id="root"></div>

    <script type="module" src="/src/main.tsx"></script> -->
  </body>
</html>
