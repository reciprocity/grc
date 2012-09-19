# A Document
#
# Can either be linked by a URL or attached from Google Docs.
class Document < ActiveRecord::Base
  include AuthoredModel

  VALID_SCHEMES = ['http', 'https']

  attr_accessible :link, :title

  has_many :object_documents, :dependent => :destroy

  is_versioned_ext

  validate :link do
    begin
      if link.nil? || VALID_SCHEMES.include?(link.scheme)
        true
      else
        errors.add(:link, "scheme must be one of #{VALID_SCHEMES.join(', ')}")
      end
    rescue
      errors.add(:link, "must be a valid URI")
    end
  end

  validates :link,
    :uniqueness => true, :allow_blank => true

  validates :title, :presence => true

  def display_name
    title
  end

  def link
    link = read_attribute(:link)
    URI(link) if !link.blank?
  rescue
    link
  end

  def link=(value)
    if !value.blank? && !VALID_SCHEMES.include?(value.split(':')[0])
      value = "http://#{value}"
    end
    write_attribute(:link, value)
  end

  def link_url
    link && link.to_s
  end

  def complete?
    !link.nil? && !link.to_s.blank?
  end
end
