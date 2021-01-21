class Api::V1::ImagesController < ApiController
  def index
    load_images
  end

  def create
    build_image
    save_image
  end

  def destroy
    load_image
    @image.destroy
  end

  private
  def load_images
    @images ||= Image.all
    json_response @images
  end

  def load_image
    @image ||= Image.find(params[:id])
  end

  def save_image
    if @image.save
      json_response @image
    end
  end

  def build_image
    @image ||= Image.new image_params
  end

  def image_params
    params.permit(:file)
  end
end
