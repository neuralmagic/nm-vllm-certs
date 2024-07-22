# nm-vllm-certs

## Overview

The `nm-vllm` packages published in this repository are Neuralmagic Enterprise Edition of [vLLM](https://github.com/vllm-project/vllm). Packages are versioned Python wheels and docker images. These are released as "production level" official releases and "beta level" Nightly's.

Official releases are made at the discretion of Neuralmagic, but typically track with `vllm` releases. These wheels are available via "public pypi" as well as ["nm-pypi"](https://pypi.neuralmagic.com).

Nightly's are released every night given green runs in automation. The wheels are available at ["nm-pypi"](https://pypi.neuralmagic.com).

## Installation

### PyPI
The [nm-vllm PyPi package](https://pypi.neuralmagic.com/simple/nm-vllm/index.html) includes pre-compiled binaries for CUDA (version 12.1) kernels. For other PyTorch or CUDA versions, please compile the package from source.

Install it using pip:
```bash
pip install nm-vllm --extra-index-url https://pypi.neuralmagic.com/simple
```

To utilize the weight sparsity features, include the optional `sparse` dependencies.
```bash
pip install nm-vllm[sparse] --extra-index-url https://pypi.neuralmagic.com/simple
```

You can also build and install `nm-vllm` from source (this will take ~10 minutes):
```bash
git clone https://github.com/neuralmagic/nm-vllm.git
cd nm-vllm
pip install -e .[sparse] --extra-index-url https://pypi.neuralmagic.com/simple

### Docker

The [`nm-vllm-ent` container registry](https://github.com/neuralmagic/nm-vllm-certs/pkgs/container/nm-vllm-ent) includes premade docker images.

Launch the OpenAI-compatible server with:

```bash
MODEL_ID=Qwen/Qwen2-0.5B-Instruct
docker run --gpus all --shm-size 2g ghcr.io/neuralmagic/nm-vllm-ent:latest --model $MODEL_ID
```

## Models

Neural Magic maintains a variety of optimized models on our Hugging Face organization profiles:
- [neuralmagic](https://huggingface.co/neuralmagic)
- [nm-testing](https://huggingface.co/nm-testing)
