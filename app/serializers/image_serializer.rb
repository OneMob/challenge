class ImageSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  BLOB_ATTRS = [:content_type, :byte_size, :filename]
  attributes :id, :url, *BLOB_ATTRS

  def initialize(*params)
    super(*params)
    define_method_attributes BLOB_ATTRS
  end

  def url
    rails_blob_url(object.file, only_path: true) if object.file.attached?
  end

  private

  def define_method_attributes attributes
    attributes.each do |attr|
      class_eval <<-EOS
        def #{attr}
          object.file.#{attr} if object.file.attached?
        end
      EOS
    end
  end
end
