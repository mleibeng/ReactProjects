FROM node:20


WORKDIR /workspace
# Install basic development tools
RUN apt update && apt install -y less man-db sudo

# RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# # Load nvm into the shell environment
# ENV NVM_DIR /root/.nvm
# RUN . "$NVM_DIR/nvm.sh" \
#   && nvm install 20 \
#   && nvm alias default 20

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true
