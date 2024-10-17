# nodejs-compare-bench

```console
➜  nodejs-compare-bench (main) node --allow-natives-syntax index.js                                                              ✭


* __Machine:__ linux x64 | 6 vCPUs | 31.3GB Mem
* __Node:__ `v20.18.0`
* __Run:__ Thu Oct 17 2024 15:45:23 GMT-0300 (Brasilia Standard Time)

________________________________copied-function________________________________
Running... bench-node
Using includes x 98,187,465 ops/sec (10 runs sampled) v8-never-optimize=true min..max=(10.12ns ... 10.32ns) p75=10.22ns p99=10.32ns
Using includes 2 x 98,633,460 ops/sec (11 runs sampled) v8-never-optimize=true min..max=(10.09ns ... 10.22ns) p75=10.16ns p99=10.22ns
Using includes 3 x 98,993,241 ops/sec (10 runs sampled) v8-never-optimize=true min..max=(10.06ns ... 10.14ns) p75=10.10ns p99=10.14ns
-----------------------------------------------------------------
Running... tinybench
┌─────────┬────────────────────┬──────────────┬────────────────────┬──────────┬──────────┐
│ (index) │ Task Name          │ ops/sec      │ Average Time (ns)  │ Margin   │ Samples  │
├─────────┼────────────────────┼──────────────┼────────────────────┼──────────┼──────────┤
│ 0       │ 'Using includes'   │ '20,228,344' │ 49.43558390778447  │ '±0.10%' │ 10114173 │
│ 1       │ 'Using includes 2' │ '18,719,940' │ 53.41897373411688  │ '±0.04%' │ 9359971  │
│ 2       │ 'Using includes 3' │ '18,163,087' │ 55.056717668517656 │ '±0.04%' │ 9081544  │
└─────────┴────────────────────┴──────────────┴────────────────────┴──────────┴──────────┘
-----------------------------------------------------------------
Running... benchmark
Using includes x 1,285,012,183 ops/sec ±0.11% (98 runs sampled)
Using includes 2 x 1,285,361,263 ops/sec ±0.05% (99 runs sampled)
Using includes 3 x 1,277,073,238 ops/sec ±0.17% (98 runs sampled)
-----------------------------------------------------------------
________________________________empty-function________________________________
Running... bench-node
empty x 158,548,979 ops/sec (11 runs sampled) v8-never-optimize=true min..max=(6.28ns ... 6.33ns) p75=6.32ns p99=6.33ns
async empty x 12,122,437 ops/sec (11 runs sampled) v8-never-optimize=true min..max=(81.97ns ... 83.47ns) p75=82.87ns p99=83.47ns
-----------------------------------------------------------------
Running... tinybench
┌─────────┬───────────────┬──────────────┬────────────────────┬──────────┬─────────┐
│ (index) │ Task Name     │ ops/sec      │ Average Time (ns)  │ Margin   │ Samples │
├─────────┼───────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 0       │ 'empty'       │ '19,230,845' │ 51.99979241926066  │ '±0.15%' │ 9615424 │
│ 1       │ 'async empty' │ '6,176,296'  │ 161.90932983043282 │ '±0.36%' │ 3088149 │
└─────────┴───────────────┴──────────────┴────────────────────┴──────────┴─────────┘
-----------------------------------------------------------------
Running... benchmark
empty x 1,284,567,285 ops/sec ±0.05% (97 runs sampled)
async empty x 139,646,288 ops/sec ±0.49% (96 runs sampled)
-----------------------------------------------------------------
```
