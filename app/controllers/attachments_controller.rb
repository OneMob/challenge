class AttachmentsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :load_resources, only: :index
  before_action :load_resource, only: :destroy

  def index
    render json: @attachments.includes(file_attachment: :blob).map(&:as_hash)
  end

  def create
    @attachment = Attachment.create(attachment_params)
    render json: { success: true, attachment: @attachment.as_hash }
  end

  def destroy
    @attachment.destroy
    render json: { success: true }
  end

  private

  def load_resources
    @attachments = Attachment.all
  end

  def load_resource
    @attachment = Attachment.find(params[:id])
  end

  def attachment_params
    params.permit(:file)
  end
end
