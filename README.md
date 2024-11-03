## Goal of the project
This simple project aims to provide a simple way to benchmark different javascript functions.

## Executing
Execute ```deno task bench```.
The result will be something like this:
````
benchmark           time/iter (avg)        iter/s      (min … max)           p75      p99     p995
------------------- ----------------------------- --------------------- --------------------------
sumUsingReduce             530.3 ns     1,886,000 (498.4 ns …   2.9 µs) 508.2 ns 532.5 ns   2.9 µs
sumUsingForLoop            602.2 ns     1,661,000 (593.2 ns … 639.9 ns) 609.1 ns 639.9 ns 639.9 ns
sumUsingForOfLoop          636.7 ns     1,570,000 (631.8 ns … 658.4 ns) 638.0 ns 658.4 ns 658.4 ns
sumUsingForEach            979.4 ns     1,021,000 (956.4 ns …   1.7 µs) 970.4 ns   1.7 µs   1.7 µs

summary
  sumUsingReduce
     1.14x faster than sumUsingForLoop
     1.20x faster than sumUsingForOfLoop
     1.85x faster than sumUsingForEach
````