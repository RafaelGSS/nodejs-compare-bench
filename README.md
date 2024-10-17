# nodejs-compare-bench

```console
➜  nodejs-compare-bench (main) node --allow-natives-syntax index.js


* __Machine:__ linux x64 | 6 vCPUs | 31.3GB Mem
* __Node:__ `v23.0.0`
* __Run:__ Thu Oct 17 2024 15:47:39 GMT-0300 (Brasilia Standard Time)

________________________________copied-function________________________________
Running... bench-node
Using includes x 92,530,688 ops/sec (11 runs sampled) v8-never-optimize=true min..max=(10.79ns ... 10.82ns) p75=10.82ns p99=10.82ns
Using includes 2 x 92,564,817 ops/sec (11 runs sampled) v8-never-optimize=true min..max=(10.79ns ... 10.83ns) p75=10.81ns p99=10.83ns
Using includes 3 x 92,619,040 ops/sec (12 runs sampled) v8-never-optimize=true min..max=(10.79ns ... 10.81ns) p75=10.81ns p99=10.81ns
-----------------------------------------------------------------
Running... tinybench
┌─────────┬────────────────────┬──────────────┬────────────────────┬──────────┬──────────┐
│ (index) │ Task Name          │ ops/sec      │ Average Time (ns)  │ Margin   │ Samples  │
├─────────┼────────────────────┼──────────────┼────────────────────┼──────────┼──────────┤
│ 0       │ 'Using includes'   │ '20,234,948' │ 49.41944951675299  │ '±0.08%' │ 10117475 │
│ 1       │ 'Using includes 2' │ '20,289,380' │ 49.286867485808806 │ '±0.11%' │ 10144691 │
│ 2       │ 'Using includes 3' │ '20,121,249' │ 49.69870351007558  │ '±0.10%' │ 10060625 │
└─────────┴────────────────────┴──────────────┴────────────────────┴──────────┴──────────┘
-----------------------------------------------------------------
Running... benchmark
Using includes x 143,015,567 ops/sec ±4.56% (77 runs sampled)
Using includes 2 x 139,950,561 ops/sec ±6.19% (78 runs sampled)
Using includes 3 x 144,430,723 ops/sec ±5.44% (82 runs sampled)
-----------------------------------------------------------------
________________________________empty-function________________________________
Running... bench-node
empty x 139,054,831 ops/sec (11 runs sampled) v8-never-optimize=true min..max=(7.13ns ... 7.22ns) p75=7.18ns p99=7.22ns
async empty x 12,752,798 ops/sec (11 runs sampled) v8-never-optimize=true min..max=(76.95ns ... 79.47ns) p75=78.67ns p99=79.47ns
-----------------------------------------------------------------
Running... tinybench
┌─────────┬───────────────┬──────────────┬────────────────────┬──────────┬─────────┐
│ (index) │ Task Name     │ ops/sec      │ Average Time (ns)  │ Margin   │ Samples │
├─────────┼───────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 0       │ 'empty'       │ '18,975,093' │ 52.700661405023034 │ '±0.03%' │ 9487547 │
│ 1       │ 'async empty' │ '6,519,956'  │ 153.37524471204478 │ '±0.68%' │ 3259982 │
└─────────┴───────────────┴──────────────┴────────────────────┴──────────┴─────────┘
-----------------------------------------------------------------
Running... benchmark
empty x 145,892,879 ops/sec ±5.57% (77 runs sampled)
async empty x 81,130,281 ops/sec ±2.98% (85 runs sampled)
-----------------------------------------------------------------
```
