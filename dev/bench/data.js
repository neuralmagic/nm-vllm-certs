window.BENCHMARK_DATA = {
  "lastUpdate": 1721787665992,
  "repoUrl": "https://github.com/neuralmagic/nm-vllm-certs",
  "entries": {
    "smaller_is_better": [
      {
        "commit": {
          "author": {
            "name": "dhuangnm",
            "username": "dhuangnm",
            "email": "74931910+dhuangnm@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "93bdf2fa5bf5d091e5c96842013a070e97a99047",
          "message": "Merge pull request #3 from neuralmagic/docker\n\nPublished nm-vllm-ent docker package and added README.md",
          "timestamp": "2024-07-23T20:58:54Z",
          "url": "https://github.com/neuralmagic/nm-vllm-certs/commit/93bdf2fa5bf5d091e5c96842013a070e97a99047"
        },
        "date": 1721787665377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"name\": \"mean_ttft_ms\", \"description\": \"VLLM Serving - Dense\\nmodel - meta-llama/Meta-Llama-3-8B-Instruct\\nmax-model-len - 4096\\nsparsity - None\\nbenchmark_serving {\\n  \\\"nr-qps-pair_\\\": \\\"300,1\\\",\\n  \\\"dataset\\\": \\\"sharegpt\\\"\\n}\", \"gpu_description\": \"NVIDIA H100 80GB HBM3 x 1\", \"vllm_version\": \"0.5.2.0\", \"python_version\": \"3.10.12 (main, Jun  7 2023, 13:43:11) [GCC 11.3.0]\", \"torch_version\": \"2.3.0+cu121\"}",
            "value": 31.437105333122112,
            "unit": "ms",
            "extra": "{\n  \"description\": \"VLLM Serving - Dense\\nmodel - meta-llama/Meta-Llama-3-8B-Instruct\\nmax-model-len - 4096\\nsparsity - None\\nbenchmark_serving {\\n  \\\"nr-qps-pair_\\\": \\\"300,1\\\",\\n  \\\"dataset\\\": \\\"sharegpt\\\"\\n}\",\n  \"benchmarking_context\": {\n    \"vllm_version\": \"0.5.2.0\",\n    \"python_version\": \"3.10.12 (main, Jun  7 2023, 13:43:11) [GCC 11.3.0]\",\n    \"torch_version\": \"2.3.0+cu121\",\n    \"torch_cuda_version\": \"12.1\",\n    \"cuda_devices\": \"[_CudaDeviceProperties(name='NVIDIA H100 80GB HBM3', major=9, minor=0, total_memory=81116MB, multi_processor_count=132)]\",\n    \"cuda_device_names\": [\n      \"NVIDIA H100 80GB HBM3\"\n    ]\n  },\n  \"gpu_description\": \"NVIDIA H100 80GB HBM3 x 1\",\n  \"script_name\": \"benchmark_serving.py\",\n  \"script_args\": {\n    \"description\": \"VLLM Serving - Dense\\nmodel - meta-llama/Meta-Llama-3-8B-Instruct\\nmax-model-len - 4096\\nsparsity - None\\nbenchmark_serving {\\n  \\\"nr-qps-pair_\\\": \\\"300,1\\\",\\n  \\\"dataset\\\": \\\"sharegpt\\\"\\n}\",\n    \"backend\": \"vllm\",\n    \"version\": \"N/A\",\n    \"base_url\": null,\n    \"host\": \"127.0.0.1\",\n    \"port\": 9000,\n    \"endpoint\": \"/generate\",\n    \"dataset\": \"sharegpt\",\n    \"num_input_tokens\": null,\n    \"num_output_tokens\": null,\n    \"model\": \"meta-llama/Meta-Llama-3-8B-Instruct\",\n    \"tokenizer\": \"meta-llama/Meta-Llama-3-8B-Instruct\",\n    \"best_of\": 1,\n    \"use_beam_search\": false,\n    \"log_model_io\": false,\n    \"seed\": 0,\n    \"trust_remote_code\": false,\n    \"disable_tqdm\": false,\n    \"save_directory\": \"benchmark-results\",\n    \"num_prompts_\": null,\n    \"request_rate_\": null,\n    \"nr_qps_pair_\": [\n      300,\n      \"1.0\"\n    ],\n    \"server_tensor_parallel_size\": 1,\n    \"server_args\": \"{'model': 'meta-llama/Meta-Llama-3-8B-Instruct', 'tokenizer': 'meta-llama/Meta-Llama-3-8B-Instruct', 'max-model-len': 4096, 'host': '127.0.0.1', 'port': 9000, 'tensor-parallel-size': 1, 'disable-log-requests': ''}\"\n  },\n  \"date\": \"2024-07-24 02:19:15 UTC\",\n  \"model\": \"meta-llama/Meta-Llama-3-8B-Instruct\",\n  \"dataset\": \"sharegpt\"\n}"
          },
          {
            "name": "{\"name\": \"mean_tpot_ms\", \"description\": \"VLLM Serving - Dense\\nmodel - meta-llama/Meta-Llama-3-8B-Instruct\\nmax-model-len - 4096\\nsparsity - None\\nbenchmark_serving {\\n  \\\"nr-qps-pair_\\\": \\\"300,1\\\",\\n  \\\"dataset\\\": \\\"sharegpt\\\"\\n}\", \"gpu_description\": \"NVIDIA H100 80GB HBM3 x 1\", \"vllm_version\": \"0.5.2.0\", \"python_version\": \"3.10.12 (main, Jun  7 2023, 13:43:11) [GCC 11.3.0]\", \"torch_version\": \"2.3.0+cu121\"}",
            "value": 11.310298034154968,
            "unit": "ms",
            "extra": "{\n  \"description\": \"VLLM Serving - Dense\\nmodel - meta-llama/Meta-Llama-3-8B-Instruct\\nmax-model-len - 4096\\nsparsity - None\\nbenchmark_serving {\\n  \\\"nr-qps-pair_\\\": \\\"300,1\\\",\\n  \\\"dataset\\\": \\\"sharegpt\\\"\\n}\",\n  \"benchmarking_context\": {\n    \"vllm_version\": \"0.5.2.0\",\n    \"python_version\": \"3.10.12 (main, Jun  7 2023, 13:43:11) [GCC 11.3.0]\",\n    \"torch_version\": \"2.3.0+cu121\",\n    \"torch_cuda_version\": \"12.1\",\n    \"cuda_devices\": \"[_CudaDeviceProperties(name='NVIDIA H100 80GB HBM3', major=9, minor=0, total_memory=81116MB, multi_processor_count=132)]\",\n    \"cuda_device_names\": [\n      \"NVIDIA H100 80GB HBM3\"\n    ]\n  },\n  \"gpu_description\": \"NVIDIA H100 80GB HBM3 x 1\",\n  \"script_name\": \"benchmark_serving.py\",\n  \"script_args\": {\n    \"description\": \"VLLM Serving - Dense\\nmodel - meta-llama/Meta-Llama-3-8B-Instruct\\nmax-model-len - 4096\\nsparsity - None\\nbenchmark_serving {\\n  \\\"nr-qps-pair_\\\": \\\"300,1\\\",\\n  \\\"dataset\\\": \\\"sharegpt\\\"\\n}\",\n    \"backend\": \"vllm\",\n    \"version\": \"N/A\",\n    \"base_url\": null,\n    \"host\": \"127.0.0.1\",\n    \"port\": 9000,\n    \"endpoint\": \"/generate\",\n    \"dataset\": \"sharegpt\",\n    \"num_input_tokens\": null,\n    \"num_output_tokens\": null,\n    \"model\": \"meta-llama/Meta-Llama-3-8B-Instruct\",\n    \"tokenizer\": \"meta-llama/Meta-Llama-3-8B-Instruct\",\n    \"best_of\": 1,\n    \"use_beam_search\": false,\n    \"log_model_io\": false,\n    \"seed\": 0,\n    \"trust_remote_code\": false,\n    \"disable_tqdm\": false,\n    \"save_directory\": \"benchmark-results\",\n    \"num_prompts_\": null,\n    \"request_rate_\": null,\n    \"nr_qps_pair_\": [\n      300,\n      \"1.0\"\n    ],\n    \"server_tensor_parallel_size\": 1,\n    \"server_args\": \"{'model': 'meta-llama/Meta-Llama-3-8B-Instruct', 'tokenizer': 'meta-llama/Meta-Llama-3-8B-Instruct', 'max-model-len': 4096, 'host': '127.0.0.1', 'port': 9000, 'tensor-parallel-size': 1, 'disable-log-requests': ''}\"\n  },\n  \"date\": \"2024-07-24 02:19:15 UTC\",\n  \"model\": \"meta-llama/Meta-Llama-3-8B-Instruct\",\n  \"dataset\": \"sharegpt\"\n}"
          },
          {
            "name": "{\"name\": \"mean_ttft_ms\", \"description\": \"VLLM Serving - Dense\\nmodel - facebook/opt-350m\\nmax-model-len - 2048\\nsparsity - None\\nbenchmark_serving {\\n  \\\"nr-qps-pair_\\\": \\\"300,1\\\",\\n  \\\"dataset\\\": \\\"sharegpt\\\"\\n}\", \"gpu_description\": \"NVIDIA H100 80GB HBM3 x 1\", \"vllm_version\": \"0.5.2.0\", \"python_version\": \"3.10.12 (main, Jun  7 2023, 13:43:11) [GCC 11.3.0]\", \"torch_version\": \"2.3.0+cu121\"}",
            "value": 41.59880117047578,
            "unit": "ms",
            "extra": "{\n  \"description\": \"VLLM Serving - Dense\\nmodel - facebook/opt-350m\\nmax-model-len - 2048\\nsparsity - None\\nbenchmark_serving {\\n  \\\"nr-qps-pair_\\\": \\\"300,1\\\",\\n  \\\"dataset\\\": \\\"sharegpt\\\"\\n}\",\n  \"benchmarking_context\": {\n    \"vllm_version\": \"0.5.2.0\",\n    \"python_version\": \"3.10.12 (main, Jun  7 2023, 13:43:11) [GCC 11.3.0]\",\n    \"torch_version\": \"2.3.0+cu121\",\n    \"torch_cuda_version\": \"12.1\",\n    \"cuda_devices\": \"[_CudaDeviceProperties(name='NVIDIA H100 80GB HBM3', major=9, minor=0, total_memory=81116MB, multi_processor_count=132)]\",\n    \"cuda_device_names\": [\n      \"NVIDIA H100 80GB HBM3\"\n    ]\n  },\n  \"gpu_description\": \"NVIDIA H100 80GB HBM3 x 1\",\n  \"script_name\": \"benchmark_serving.py\",\n  \"script_args\": {\n    \"description\": \"VLLM Serving - Dense\\nmodel - facebook/opt-350m\\nmax-model-len - 2048\\nsparsity - None\\nbenchmark_serving {\\n  \\\"nr-qps-pair_\\\": \\\"300,1\\\",\\n  \\\"dataset\\\": \\\"sharegpt\\\"\\n}\",\n    \"backend\": \"vllm\",\n    \"version\": \"N/A\",\n    \"base_url\": null,\n    \"host\": \"127.0.0.1\",\n    \"port\": 9000,\n    \"endpoint\": \"/generate\",\n    \"dataset\": \"sharegpt\",\n    \"num_input_tokens\": null,\n    \"num_output_tokens\": null,\n    \"model\": \"facebook/opt-350m\",\n    \"tokenizer\": \"facebook/opt-350m\",\n    \"best_of\": 1,\n    \"use_beam_search\": false,\n    \"log_model_io\": false,\n    \"seed\": 0,\n    \"trust_remote_code\": false,\n    \"disable_tqdm\": false,\n    \"save_directory\": \"benchmark-results\",\n    \"num_prompts_\": null,\n    \"request_rate_\": null,\n    \"nr_qps_pair_\": [\n      300,\n      \"1.0\"\n    ],\n    \"server_tensor_parallel_size\": 1,\n    \"server_args\": \"{'model': 'facebook/opt-350m', 'tokenizer': 'facebook/opt-350m', 'max-model-len': 2048, 'host': '127.0.0.1', 'port': 9000, 'tensor-parallel-size': 1, 'disable-log-requests': ''}\"\n  },\n  \"date\": \"2024-07-24 02:13:15 UTC\",\n  \"model\": \"facebook/opt-350m\",\n  \"dataset\": \"sharegpt\"\n}"
          },
          {
            "name": "{\"name\": \"mean_tpot_ms\", \"description\": \"VLLM Serving - Dense\\nmodel - facebook/opt-350m\\nmax-model-len - 2048\\nsparsity - None\\nbenchmark_serving {\\n  \\\"nr-qps-pair_\\\": \\\"300,1\\\",\\n  \\\"dataset\\\": \\\"sharegpt\\\"\\n}\", \"gpu_description\": \"NVIDIA H100 80GB HBM3 x 1\", \"vllm_version\": \"0.5.2.0\", \"python_version\": \"3.10.12 (main, Jun  7 2023, 13:43:11) [GCC 11.3.0]\", \"torch_version\": \"2.3.0+cu121\"}",
            "value": 7.50908925781783,
            "unit": "ms",
            "extra": "{\n  \"description\": \"VLLM Serving - Dense\\nmodel - facebook/opt-350m\\nmax-model-len - 2048\\nsparsity - None\\nbenchmark_serving {\\n  \\\"nr-qps-pair_\\\": \\\"300,1\\\",\\n  \\\"dataset\\\": \\\"sharegpt\\\"\\n}\",\n  \"benchmarking_context\": {\n    \"vllm_version\": \"0.5.2.0\",\n    \"python_version\": \"3.10.12 (main, Jun  7 2023, 13:43:11) [GCC 11.3.0]\",\n    \"torch_version\": \"2.3.0+cu121\",\n    \"torch_cuda_version\": \"12.1\",\n    \"cuda_devices\": \"[_CudaDeviceProperties(name='NVIDIA H100 80GB HBM3', major=9, minor=0, total_memory=81116MB, multi_processor_count=132)]\",\n    \"cuda_device_names\": [\n      \"NVIDIA H100 80GB HBM3\"\n    ]\n  },\n  \"gpu_description\": \"NVIDIA H100 80GB HBM3 x 1\",\n  \"script_name\": \"benchmark_serving.py\",\n  \"script_args\": {\n    \"description\": \"VLLM Serving - Dense\\nmodel - facebook/opt-350m\\nmax-model-len - 2048\\nsparsity - None\\nbenchmark_serving {\\n  \\\"nr-qps-pair_\\\": \\\"300,1\\\",\\n  \\\"dataset\\\": \\\"sharegpt\\\"\\n}\",\n    \"backend\": \"vllm\",\n    \"version\": \"N/A\",\n    \"base_url\": null,\n    \"host\": \"127.0.0.1\",\n    \"port\": 9000,\n    \"endpoint\": \"/generate\",\n    \"dataset\": \"sharegpt\",\n    \"num_input_tokens\": null,\n    \"num_output_tokens\": null,\n    \"model\": \"facebook/opt-350m\",\n    \"tokenizer\": \"facebook/opt-350m\",\n    \"best_of\": 1,\n    \"use_beam_search\": false,\n    \"log_model_io\": false,\n    \"seed\": 0,\n    \"trust_remote_code\": false,\n    \"disable_tqdm\": false,\n    \"save_directory\": \"benchmark-results\",\n    \"num_prompts_\": null,\n    \"request_rate_\": null,\n    \"nr_qps_pair_\": [\n      300,\n      \"1.0\"\n    ],\n    \"server_tensor_parallel_size\": 1,\n    \"server_args\": \"{'model': 'facebook/opt-350m', 'tokenizer': 'facebook/opt-350m', 'max-model-len': 2048, 'host': '127.0.0.1', 'port': 9000, 'tensor-parallel-size': 1, 'disable-log-requests': ''}\"\n  },\n  \"date\": \"2024-07-24 02:13:15 UTC\",\n  \"model\": \"facebook/opt-350m\",\n  \"dataset\": \"sharegpt\"\n}"
          }
        ]
      }
    ]
  }
}