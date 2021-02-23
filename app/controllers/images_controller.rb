class ImagesController < ApplicationController
  before_action :set_image, only: [:show, :edit, :update, :destroy]
  require 'mimemagic'
  # GET /images
  # GET /images.json
  def index
    @images = Image.all
    render(json: {image: @images.as_json})
  end

  # GET /images/1
  # GET /images/1.json
  def show
    render(json: {image: @image.as_json}) && return
  end

  # POST /images
  # POST /images.json
  def create
    size = image_params[:file].size
    mime_type = MimeMagic.by_magic(image_params[:file]).type
    @image = Image.new(image_params.merge(size: size, mime_type: mime_type))
    respond_to do |format|
      if @image.save
        @image.update(location: image_location)
        render(json: {image: @image.as_json}) && return
      else
        format.html { render :new }
        format.json { render json: @image.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /images/1
  # DELETE /images/1.json
  def destroy
    if @image.destroy
      render(json: {sucess: true, message: 'Image deleted successfully.', id: @image.id}) && return
    else
      render(json: {sucess: false, message: 'There is some error while deleting the image.', id: @image.id}) && return
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_image
      @image = Image.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def image_params
      params.permit(:file)
    end

    def image_location
      @image.reload
     'http://localhost:3000' + rails_blob_path(@image.file) if @image.file.attached?
    end
end
