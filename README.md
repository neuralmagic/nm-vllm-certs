# nm-vllm-certs


## Overview
The `nm-vllm` packages published in this repository are Neural Magic Enterprise Editions of [vLLM](https://github.com/vllm-project/vllm). Packages are versioned Python wheels and docker images. These are released as "production level" official releases and "beta level" nightly releases.

Official releases are made at the discretion of Neural Magic, but typically track with `vllm` releases. These wheels are available via the official PyPI as well as [Neural Magic's PyPI](https://pypi.neuralmagic.com).

Nightly builds are released every night given green runs in automation. The wheels are available at [Neural Magic's PyPI](https://pypi.neuralmagic.com).


## Benchmarks

Please see how we are doing with our benchmark results [here]( https://neuralmagic.github.io/nm-vllm-certs/dev/bench/).


## Installation


### PyPI
The [nm-vllm PyPI package](https://pypi.neuralmagic.com/simple/nm-vllm/index.html) includes pre-compiled binaries for CUDA (version 12.1) kernels. For other PyTorch or CUDA versions, please compile the package from source.

Install it using pip:
```bash
pip install nm-vllm --extra-index-url https://pypi.neuralmagic.com/simple
```

To utilize the weight sparsity features, include the optional `sparse` dependencies.
```bash
pip install nm-vllm[sparse] --extra-index-url https://pypi.neuralmagic.com/simple
```


### Docker

The `nm-vllm-ent` [container registry](https://github.com/neuralmagic/nm-vllm-certs/pkgs/container/nm-vllm-ent) includes premade docker images.

Launch the OpenAI-compatible server with:

```bash
MODEL_ID=Qwen/Qwen2-0.5B-Instruct
docker run --gpus all --shm-size 2g ghcr.io/neuralmagic/nm-vllm-ent:latest --model $MODEL_ID
```


## Models

Neural Magic maintains a variety of optimized models on our Hugging Face organization profiles:
- [neuralmagic](https://huggingface.co/neuralmagic)
- [nm-testing](https://huggingface.co/nm-testing)
